import { client } from "@/services/graphql/client";
import { IGenAnnouncementBar, IGenQuery } from "@/types/IGenTypes";
import q_announcement_bar from "../graphql/queries/q_announcement_bar";

export async function getAnnouncementBar(
  locale: string,
): Promise<IGenAnnouncementBar | null> {
  try {
    const { data } = await client.query<Pick<IGenQuery, "announcementBar">>({
      query: q_announcement_bar,
      variables: {
        locale: locale,
      },
    });

    return data?.announcementBar ?? null;
  } catch (err) {
    console.error("Error fetching announcement bar:", err);
    return null;
  }
}
