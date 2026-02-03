import RichTextRenderer from "@/base-components/rich-text-renderer/RichTextRenderer";
import Button from "@/component/atoms/button/Button";
import { PaginationWrapper } from "@/component/molecules/pagination/PaginationWrapper";
import { getAnnouncementBar } from "@/services/content/getAnnouncementBar";

export default async function NextjsPage() {
  const announcementBar = await getAnnouncementBar();

  return (
    <main>
      <h1>Nextjs Page</h1>
      <RichTextRenderer content={announcementBar?.content} />

      <PaginationWrapper />

      <Button variant="primary" size="md">
        Button
      </Button>
    </main>
  );
}
