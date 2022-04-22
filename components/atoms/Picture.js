import { memo } from "react";
import Image from "next/image";

export const Picture = memo(function Picture({ base, md, lg }) {
  return (
    <picture>
      <source width='100%' srcSet={lg} media='(min-width: 1000px)' />
      <source width='100%' srcSet={md} media='(min-width: 670px)' />
      <Image width='100%' src={base} alt='test' />
    </picture>
  );
});
