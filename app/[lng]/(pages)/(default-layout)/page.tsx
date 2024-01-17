import { getAllBlogs } from "@/sanity/sanity-lib/sanity-client-fns";
import { createTranslation } from "@/i18n";
import BlogCard from "@/components/blog-card/BlogCard";
import BlogCoverSection from "@/components/blog-cover/BlogCover";
import { SharedPageProps } from "@/app/[lng]/layout";
import { Container } from "@/components/containers/Container";

export default async function Page({ params }: SharedPageProps) {
  const { t } = await createTranslation(params.lng, "translation");
  return (
    <Container className="py-10 flex flex-col items-center gap-2">
      <h1 className="mb-4 text-4xl font-bold text-center mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        accusamus beatae mollitia deleniti excepturi ut, ratione consequatur
        inventore cumque earum quisquam officia ea veritatis reiciendis sequi
        soluta impedit totam aut.
      </p>
    </Container>
  );
}
