-- Fix: Add updatedAt value to all inserts
INSERT INTO "PricingModule" (id, name, price, "systemType", "isActive", "createdAt", "updatedAt") VALUES
-- Medical (8)
(gen_random_uuid(), 'تسجيل الدخول والصلاحيات', 500, 'medical', true, now(), now()),
(gen_random_uuid(), 'لوحة التحكم الرئيسية', 400, 'medical', true, now(), now()),
(gen_random_uuid(), 'التقارير والإحصائيات', 350, 'medical', true, now(), now()),
(gen_random_uuid(), 'الإشعارات والتنبيهات', 250, 'medical', true, now(), now()),
(gen_random_uuid(), 'إدارة المرضى', 600, 'medical', true, now(), now()),
(gen_random_uuid(), 'حجز المواعيد', 450, 'medical', true, now(), now()),
(gen_random_uuid(), 'السجلات الطبية', 550, 'medical', true, now(), now()),
(gen_random_uuid(), 'الفواتير والمحاسبة', 400, 'medical', true, now(), now()),

-- Restaurant (8)
(gen_random_uuid(), 'تسجيل الدخول والصلاحيات', 500, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'لوحة التحكم الرئيسية', 400, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'التقارير والإحصائيات', 350, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'الإشعارات والتنبيهات', 250, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'إدارة الطلبات', 500, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'إدارة قائمة الطعام', 400, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'حجز الطاولات', 350, 'restaurant', true, now(), now()),
(gen_random_uuid(), 'شاشة المطبخ', 450, 'restaurant', true, now(), now()),

-- School (8)
(gen_random_uuid(), 'تسجيل الدخول والصلاحيات', 500, 'school', true, now(), now()),
(gen_random_uuid(), 'لوحة التحكم الرئيسية', 400, 'school', true, now(), now()),
(gen_random_uuid(), 'التقارير والإحصائيات', 350, 'school', true, now(), now()),
(gen_random_uuid(), 'الإشعارات والتنبيهات', 250, 'school', true, now(), now()),
(gen_random_uuid(), 'إدارة الطلاب', 550, 'school', true, now(), now()),
(gen_random_uuid(), 'تتبع الحضور والغياب', 400, 'school', true, now(), now()),
(gen_random_uuid(), 'سجل الدرجات', 450, 'school', true, now(), now()),
(gen_random_uuid(), 'إدارة الرسوم الدراسية', 400, 'school', true, now(), now()),

-- Internet Users (8)
(gen_random_uuid(), 'تسجيل الدخول والصلاحيات', 500, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'لوحة التحكم الرئيسية', 400, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'التقارير والإحصائيات', 350, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'الإشعارات والتنبيهات', 250, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'إدارة الاشتراكات', 500, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'إدارة الباقات', 400, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'الفواتير والدفع', 350, 'internet_users', true, now(), now()),
(gen_random_uuid(), 'تتبع الاستخدام', 450, 'internet_users', true, now(), now()),

-- Custom (8)
(gen_random_uuid(), 'تسجيل الدخول والصلاحيات', 500, 'custom', true, now(), now()),
(gen_random_uuid(), 'لوحة التحكم الرئيسية', 400, 'custom', true, now(), now()),
(gen_random_uuid(), 'التقارير والإحصائيات', 350, 'custom', true, now(), now()),
(gen_random_uuid(), 'الإشعارات والتنبيهات', 250, 'custom', true, now(), now()),
(gen_random_uuid(), 'موديول مخصص 1', 500, 'custom', true, now(), now()),
(gen_random_uuid(), 'موديول مخصص 2', 500, 'custom', true, now(), now()),
(gen_random_uuid(), 'موديول مخصص 3', 500, 'custom', true, now(), now()),
(gen_random_uuid(), 'ربط مع أنظمة خارجية', 600, 'custom', true, now(), now());
