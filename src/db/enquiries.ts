import { db } from './index.ts';
import { enquiries } from './schema.ts';
import { eq, desc } from 'drizzle-orm';

export async function createEnquiry(data: {
  name: string;
  phone: string;
  message?: string;
  location?: string;
  service?: string;
}) {
  try {
    return await db.insert(enquiries).values({
      name: data.name,
      phone: data.phone,
      message: data.message,
      location: data.location,
      service: data.service,
    }).returning();
  } catch (error) {
    console.error("Database query failed in createEnquiry:", error);
    throw new Error("Failed to save enquiry", { cause: error });
  }
}

export async function getAllEnquiries() {
  try {
    return await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
  } catch (error) {
    console.error("Database query failed in getAllEnquiries:", error);
    throw new Error("Failed to fetch enquiries", { cause: error });
  }
}

export async function updateEnquiryStatus(id: number, status: 'pending' | 'contacted' | 'closed') {
  try {
    return await db.update(enquiries)
      .set({ status })
      .where(eq(enquiries.id, id))
      .returning();
  } catch (error) {
    console.error("Database query failed in updateEnquiryStatus:", error);
    throw new Error("Failed to update enquiry status", { cause: error });
  }
}

export async function deleteEnquiry(id: number) {
  try {
    return await db.delete(enquiries)
      .where(eq(enquiries.id, id))
      .returning();
  } catch (error) {
    console.error("Database query failed in deleteEnquiry:", error);
    throw new Error("Failed to delete enquiry", { cause: error });
  }
}
