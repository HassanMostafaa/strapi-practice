// import RichTextRenderer from "@/base-components/rich-text-renderer/RichTextRenderer";
import Button from "@/component/atoms/button/Button";
import { AnnouncementBar } from "@/component/molecules/announcement-bar/AnnouncementBar";
import { PaginationWrapper } from "@/component/molecules/pagination/PaginationWrapper";
import { getAnnouncementBar } from "@/services/content/getAnnouncementBar";

export default async function NextjsPage() {
  const announcementBar = await getAnnouncementBar("ar");

  return (
    <main>
      {announcementBar?.text && <AnnouncementBar {...announcementBar} />}

      <PaginationWrapper />

      <Button variant="primary" size="md">
        Button
      </Button>
    </main>
  );
}
