import RichTextRenderer from "@/base-components/rich-text-renderer/RichTextRenderer";
import { getAnnouncementBar } from "@/services/content/getAnnouncementBar";

export default async function NextjsPage() {
  const announcementBar = await getAnnouncementBar();

  return (
    <main>
      <h1>Nextjs Page</h1>
      <RichTextRenderer content={announcementBar?.content} />
    </main>
  );
}
