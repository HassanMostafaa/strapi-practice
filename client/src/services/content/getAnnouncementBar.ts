import { client } from "@/services/graphql/client";
import { GET_ANNOUNCEMENT_BAR } from "../graphql/queries/GET_ANNOUNCEMENT_BAR";
import { IGenAnnouncementBar, IGenQuery } from "@/types/IGenGQL";

export async function getAnnouncementBar(): Promise<IGenAnnouncementBar | null> {
  try {
    const { data } = await client.query<Pick<IGenQuery, "announcementBar">>({
      query: GET_ANNOUNCEMENT_BAR,
    });

    return data?.announcementBar ?? null;
  } catch (err) {
    console.error("Error fetching announcement bar:", err);
    return null;
  }
}
