import { LinkIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !["footer"].includes(listItem.getId()!),
      ),
      S.listItem().title("Footer").icon(LinkIcon).id("footer").child(
        S.document()
          .schemaType("footer")
          // TODO: remove hardcoded id => footer
          .documentId("b275b094-2464-43a4-a325-4e2cc3348b4b"),
      ),
    ]);
