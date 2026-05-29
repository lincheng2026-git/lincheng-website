import { PageHeader } from "@/components/PageHeader";
import { GalleryPageClient } from "@/components/GalleryPageClient";

export const metadata = { title: "壁纸收藏馆" };

export default function GalleryPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="壁纸收藏馆"
        subtitle="Gallery"
        description="高清作品展示，安静收藏那些温柔的画面"
      />
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
        <GalleryPageClient />
      </div>
    </div>
  );
}
