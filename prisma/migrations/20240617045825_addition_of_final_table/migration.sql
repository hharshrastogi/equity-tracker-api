-- CreateTable
CREATE TABLE `final_ledger_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `broker` VARCHAR(256) NULL,
    `broker_account` VARCHAR(256) NULL,
    `net_quantity` INTEGER NULL,
    `equity_name` VARCHAR(256) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
