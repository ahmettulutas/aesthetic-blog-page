import { createTranslation } from "@/i18n";
import { SharedPageProps } from "@/app/[lng]/layout";
import Experiences from "@/components/experiences/Experiences";
import profileImg from "@/public/images/profile2.png";
import Image from "next/image";
import { aboutPageData, staticAboutData } from "@/lib/constants";
import { Container } from "@/components/containers/Container";
import Link from "next/link";
import { ResumeIcon } from "@/components/icons/Icons";

export default async function Page({ params }: SharedPageProps) {
  const { t } = await createTranslation(params.lng, "translation");
  const translatedData = { ...aboutPageData[params.lng], ...staticAboutData };
  return (
    <Container className="py-10">
      <h1 className="mb-4 text-3xl md:text-6xl font-bold">{t("aboutMe")}</h1>
      <article className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
        corporis, distinctio at commodi cupiditate rerum neque amet minima illum
        praesentium non illo culpa quidem quod tenetur explicabo deserunt ut ad!
        Quisquam iusto architecto, aperiam nihil exercitationem ipsa illum
        reiciendis, fugit totam pariatur in sapiente corrupti perferendis
        distinctio impedit vitae ullam mollitia deserunt eos officia quia.
        Molestias fugit doloremque temporibus repellendus. Eius assumenda velit
        quaerat nihil alias dolore, sapiente sunt. Quidem eius voluptas, veniam
        ducimus ab tempora doloremque perferendis rerum nobis autem enim, cumque
        repellendus? Laudantium accusantium facilis quisquam recusandae modi!
        Quae libero, tempora aut, id eligendi repudiandae non blanditiis amet
        accusantium, neque nihil repellendus. Alias ad ipsum nisi consequuntur
        esse aliquam debitis, rerum quo cupiditate perferendis commodi
        consectetur rem sequi? Incidunt, laboriosam? Saepe, sed doloribus! Quia
        debitis voluptatum ipsa eum nemo et est, cum ipsam deleniti vitae!
        Recusandae voluptates in doloribus, facere ea ratione modi enim
        similique voluptatum animi saepe! Fugiat, porro tenetur illo aspernatur
        laboriosam cum ullam consectetur quasi in, placeat totam sunt rem.
        Eligendi commodi sit iste ex, totam rerum, libero fugiat repellat
        recusandae temporibus culpa, quam illum. Ullam quam repellat vitae
        maxime eaque omnis amet, nostrum ipsum dolore ipsa quae, vero dolorum
        autem recusandae? Odit, placeat quidem vitae nisi blanditiis, cum
        aperiam excepturi distinctio corrupti optio ratione. Quae omnis
        voluptatibus, natus adipisci cumque blanditiis temporibus odio at
        debitis deleniti commodi reprehenderit harum impedit fugit distinctio
        quia eum nobis tenetur possimus dolores earum error quisquam mollitia
        odit. Cupiditate. Necessitatibus ab, sequi recusandae repellendus
        deleniti ea animi, porro minus omnis ipsum ducimus nobis iure ipsam
        molestias corporis explicabo dolorum, eaque quis architecto! Aspernatur
        totam culpa sequi exercitationem, ea tenetur? Sit, nemo at nihil quam
        reprehenderit quaerat animi ipsa sint accusantium id deserunt error
        libero corrupti vel blanditiis perferendis aliquid magnam amet quibusdam
        est in minus? Molestias sed aperiam odio.
      </article>
    </Container>
  );
}
