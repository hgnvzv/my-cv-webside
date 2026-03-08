import { prisma } from "../../utils/auth";

// Hardcoded pricing modules as fallback
const HARDCODED_MODULES = [
  // Medical System
  {
    id: "med-1",
    name: "تسجيل الدخول والصلاحيات",
    price: 500,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-2",
    name: "لوحة التحكم الرئيسية",
    price: 400,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-3",
    name: "التقارير والإحصائيات",
    price: 350,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-4",
    name: "الإشعارات والتنبيهات",
    price: 250,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-5",
    name: "إدارة المرضى",
    price: 600,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-6",
    name: "حجز المواعيد",
    price: 450,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-7",
    name: "السجلات الطبية",
    price: 550,
    systemType: "medical",
    isActive: true,
  },
  {
    id: "med-8",
    name: "الفواتير والمحاسبة",
    price: 400,
    systemType: "medical",
    isActive: true,
  },

  // Restaurant System
  {
    id: "res-1",
    name: "تسجيل الدخول والصلاحيات",
    price: 500,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-2",
    name: "لوحة التحكم الرئيسية",
    price: 400,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-3",
    name: "التقارير والإحصائيات",
    price: 350,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-4",
    name: "الإشعارات والتنبيهات",
    price: 250,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-5",
    name: "إدارة الطلبات",
    price: 500,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-6",
    name: "إدارة قائمة الطعام",
    price: 400,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-7",
    name: "حجز الطاولات",
    price: 350,
    systemType: "restaurant",
    isActive: true,
  },
  {
    id: "res-8",
    name: "شاشة المطبخ",
    price: 450,
    systemType: "restaurant",
    isActive: true,
  },

  // School System
  {
    id: "sch-1",
    name: "تسجيل الدخول والصلاحيات",
    price: 500,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-2",
    name: "لوحة التحكم الرئيسية",
    price: 400,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-3",
    name: "التقارير والإحصائيات",
    price: 350,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-4",
    name: "الإشعارات والتنبيهات",
    price: 250,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-5",
    name: "إدارة الطلاب",
    price: 550,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-6",
    name: "تتبع الحضور والغياب",
    price: 400,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-7",
    name: "سجل الدرجات",
    price: 450,
    systemType: "school",
    isActive: true,
  },
  {
    id: "sch-8",
    name: "إدارة الرسوم الدراسية",
    price: 400,
    systemType: "school",
    isActive: true,
  },

  // Internet Users System
  {
    id: "int-1",
    name: "تسجيل الدخول والصلاحيات",
    price: 500,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-2",
    name: "لوحة التحكم الرئيسية",
    price: 400,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-3",
    name: "التقارير والإحصائيات",
    price: 350,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-4",
    name: "الإشعارات والتنبيهات",
    price: 250,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-5",
    name: "إدارة الاشتراكات",
    price: 500,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-6",
    name: "إدارة الباقات",
    price: 400,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-7",
    name: "الفواتير والدفع",
    price: 350,
    systemType: "internet_users",
    isActive: true,
  },
  {
    id: "int-8",
    name: "تتبع الاستخدام",
    price: 450,
    systemType: "internet_users",
    isActive: true,
  },

  // Custom System
  {
    id: "cus-1",
    name: "تسجيل الدخول والصلاحيات",
    price: 500,
    systemType: "custom",
    isActive: true,
  },
  {
    id: "cus-2",
    name: "لوحة التحكم الرئيسية",
    price: 400,
    systemType: "custom",
    isActive: true,
  },
  {
    id: "cus-3",
    name: "التقارير والإحصائيات",
    price: 350,
    systemType: "custom",
    isActive: true,
  },
  {
    id: "cus-4",
    name: "الإشعارات والتنبيهات",
    price: 250,
    systemType: "custom",
    isActive: true,
  },
  {
    id: "cus-8",
    name: "ربط مع أنظمة خارجية",
    price: 600,
    systemType: "custom",
    isActive: true,
  },
];

export default defineEventHandler(async (event) => {
  try {
    // Try to fetch from database first
    let pricingModules: any[] = [];

    try {
      pricingModules = await prisma.pricingModule.findMany({
        where: { isActive: true },
        orderBy: [{ systemType: "asc" }, { name: "asc" }],
      });
    } catch (dbError) {
      console.log("Database not available, using hardcoded modules");
    }

    // If no modules in database, use hardcoded
    if (pricingModules.length === 0) {
      pricingModules = HARDCODED_MODULES;
    }

    return {
      success: true,
      pricingModules,
    };
  } catch (error) {
    // Return hardcoded modules as ultimate fallback
    return {
      success: true,
      pricingModules: HARDCODED_MODULES,
    };
  }
});
