import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const defaultPricingModules = [
  // Medical System Modules
  { name: "Authentication & Roles", price: 500, systemType: "medical" },
  { name: "Dashboard", price: 400, systemType: "medical" },
  { name: "Reports", price: 350, systemType: "medical" },
  { name: "Notifications", price: 250, systemType: "medical" },
  { name: "Patient Management", price: 600, systemType: "medical" },
  { name: "Appointment Scheduling", price: 450, systemType: "medical" },
  { name: "Medical Records", price: 550, systemType: "medical" },
  { name: "Billing & Invoicing", price: 400, systemType: "medical" },

  // Restaurant System Modules
  { name: "Authentication & Roles", price: 500, systemType: "restaurant" },
  { name: "Dashboard", price: 400, systemType: "restaurant" },
  { name: "Reports", price: 350, systemType: "restaurant" },
  { name: "Notifications", price: 250, systemType: "restaurant" },
  { name: "Orders Management", price: 500, systemType: "restaurant" },
  { name: "Menu Management", price: 400, systemType: "restaurant" },
  { name: "Table Reservation", price: 350, systemType: "restaurant" },
  { name: "Kitchen Display", price: 450, systemType: "restaurant" },

  // School System Modules
  { name: "Authentication & Roles", price: 500, systemType: "school" },
  { name: "Dashboard", price: 400, systemType: "school" },
  { name: "Reports", price: 350, systemType: "school" },
  { name: "Notifications", price: 250, systemType: "school" },
  { name: "Student Management", price: 550, systemType: "school" },
  { name: "Attendance Tracking", price: 400, systemType: "school" },
  { name: "Grade Book", price: 450, systemType: "school" },
  { name: "Fee Management", price: 400, systemType: "school" },

  // Custom System Modules
  { name: "Authentication & Roles", price: 500, systemType: "custom" },
  { name: "Dashboard", price: 400, systemType: "custom" },
  { name: "Reports", price: 350, systemType: "custom" },
  { name: "Notifications", price: 250, systemType: "custom" },
  { name: "Custom Module 1", price: 500, systemType: "custom" },
  { name: "Custom Module 2", price: 500, systemType: "custom" },
  { name: "Custom Module 3", price: 500, systemType: "custom" },
  { name: "API Integration", price: 600, systemType: "custom" },
];

async function main() {
  console.log("Starting seed...");

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@Mohammed Qassim.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123456";
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: "Admin",
        role: "admin",
      },
    });
    console.log("Admin user created:", adminEmail);
  } else {
    console.log("Admin user already exists");
  }

  // create additional admin account if requested
  const extraEmail = process.env.EXTRA_ADMIN_EMAIL || "atfsucy.com@gmail.com";
  const extraPassword = process.env.EXTRA_ADMIN_PASSWORD || "8mk82001";
  if (extraEmail) {
    const existingExtra = await prisma.user.findUnique({
      where: { email: extraEmail },
    });
    if (!existingExtra) {
      const extraHashed = await bcrypt.hash(extraPassword, 12);
      await prisma.user.create({
        data: {
          email: extraEmail,
          password: extraHashed,
          name: "Admin",
          role: "admin",
        },
      });
      console.log("Additional admin user created:", extraEmail);
    } else {
      console.log("Additional admin user already exists:", extraEmail);
    }
  }

  // Create pricing modules
  for (const module of defaultPricingModules) {
    const existing = await prisma.pricingModule.findFirst({
      where: {
        name: module.name,
        systemType: module.systemType,
      },
    });

    if (!existing) {
      await prisma.pricingModule.create({
        data: {
          name: module.name,
          price: module.price,
          systemType: module.systemType,
          isActive: true,
        },
      });
      console.log(
        `Created pricing module: ${module.name} (${module.systemType})`
      );
    }
  }

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
