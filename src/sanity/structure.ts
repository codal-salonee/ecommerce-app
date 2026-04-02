import { LinkIcon } from "@sanity/icons";
import { HomeIcon } from "lucide-react";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Homepage").icon(HomeIcon).id("homepage").child(
        S.document()
          .schemaType("homepage")
          // TODO: remove hardcoded id => homepage
          .documentId("abac78ce-e226-4c32-b716-5a414bd9d210"),
      ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !["homepage", "footer"].includes(listItem.getId()!),
      ),

      S.divider(),

      S.listItem().title("Footer").icon(LinkIcon).id("footer").child(
        S.document()
          .schemaType("footer")
          // TODO: remove hardcoded id => footer
          .documentId("b275b094-2464-43a4-a325-4e2cc3348b4b"),
      ),
    ]);
