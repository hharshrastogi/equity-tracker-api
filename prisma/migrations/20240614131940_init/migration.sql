-- CreateTable
CREATE TABLE `transactional_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `broker` VARCHAR(256) NULL,
    `broker_account` VARCHAR(256) NULL,
    `transaction_type` VARCHAR(256) NULL,
    `equity_name` VARCHAR(256) NULL,
    `transaction_date` DATE NULL,
    `quantity` INTEGER NULL,
    `price_per_unit` VARCHAR(256) NULL,
    `total_price` VARCHAR(256) NULL,
    `target_percentage` VARCHAR(256) NULL,
    `target_amount` VARCHAR(256) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
