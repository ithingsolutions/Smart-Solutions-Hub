import { 
  type ContactFormData, 
  type ContactSubmission,
  type TeamMember,
  type InsertTeamMember,
  type Client,
  type InsertClient,
  type Service,
  type InsertService,
  teamMembers,
  clients,
  services
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, asc } from "drizzle-orm";

export interface IStorage {
  createContactSubmission(data: ContactFormData): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(data: InsertTeamMember): Promise<TeamMember>;
  updateTeamMember(id: number, data: Partial<InsertTeamMember>): Promise<TeamMember>;
  deleteTeamMember(id: number): Promise<void>;
  
  // Clients
  getClients(): Promise<Client[]>;
  createClient(data: InsertClient): Promise<Client>;
  updateClient(id: number, data: Partial<InsertClient>): Promise<Client>;
  deleteClient(id: number): Promise<void>;
  
  // Services
  getServices(): Promise<Service[]>;
  createService(data: InsertService): Promise<Service>;
  updateService(id: number, data: Partial<InsertService>): Promise<Service>;
  deleteService(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.contactSubmissions = new Map();
  }

  async createContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...data,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers).orderBy(asc(teamMembers.sortOrder));
  }

  async createTeamMember(data: InsertTeamMember): Promise<TeamMember> {
    const [member] = await db.insert(teamMembers).values(data).returning();
    return member;
  }

  async updateTeamMember(id: number, data: Partial<InsertTeamMember>): Promise<TeamMember> {
    const [member] = await db.update(teamMembers).set(data).where(eq(teamMembers.id, id)).returning();
    return member;
  }

  async deleteTeamMember(id: number): Promise<void> {
    await db.delete(teamMembers).where(eq(teamMembers.id, id));
  }

  // Clients
  async getClients(): Promise<Client[]> {
    return await db.select().from(clients).orderBy(asc(clients.sortOrder));
  }

  async createClient(data: InsertClient): Promise<Client> {
    const [client] = await db.insert(clients).values(data).returning();
    return client;
  }

  async updateClient(id: number, data: Partial<InsertClient>): Promise<Client> {
    const [client] = await db.update(clients).set(data).where(eq(clients.id, id)).returning();
    return client;
  }

  async deleteClient(id: number): Promise<void> {
    await db.delete(clients).where(eq(clients.id, id));
  }

  // Services
  async getServices(): Promise<Service[]> {
    return await db.select().from(services).orderBy(asc(services.sortOrder));
  }

  async createService(data: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(data).returning();
    return service;
  }

  async updateService(id: number, data: Partial<InsertService>): Promise<Service> {
    const [service] = await db.update(services).set(data).where(eq(services.id, id)).returning();
    return service;
  }

  async deleteService(id: number): Promise<void> {
    await db.delete(services).where(eq(services.id, id));
  }
}

export const storage = new DatabaseStorage();
