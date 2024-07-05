-- AddForeignKey
ALTER TABLE `Event_detail` ADD CONSTRAINT `Event_detail_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
