-- CreateTable
CREATE TABLE "public"."categories" (
    "id" SERIAL NOT NULL,
    "category_name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "image_url" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."brands" (
    "id" SERIAL NOT NULL,
    "brand_name" VARCHAR(100) NOT NULL,
    "logo_url" TEXT,
    "description" TEXT,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "offer_highlight" TEXT,
    "cashback" VARCHAR(50),
    "cashback_type" VARCHAR(50),
    "is_sale" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."categoriesOnBrands" (
    "brand_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "categoriesOnBrands_pkey" PRIMARY KEY ("brand_id","category_id")
);

-- CreateTable
CREATE TABLE "public"."deals" (
    "id" SERIAL NOT NULL,
    "deal_title" VARCHAR(150) NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "discount_percent" DOUBLE PRECISION,
    "cashback_amount" DOUBLE PRECISION,
    "link" TEXT,
    "image_url" TEXT,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."credit_cards" (
    "id" SERIAL NOT NULL,
    "bank_name" VARCHAR(100) NOT NULL,
    "card_name" VARCHAR(100) NOT NULL,
    "cashback_percent" DOUBLE PRECISION,
    "cashback_amount" DOUBLE PRECISION,
    "joining_offer" TEXT,
    "benefits" TEXT,
    "link" TEXT,
    "image_url" TEXT,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "credit_cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."categoriesOnBrands" ADD CONSTRAINT "categoriesOnBrands_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."categoriesOnBrands" ADD CONSTRAINT "categoriesOnBrands_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
