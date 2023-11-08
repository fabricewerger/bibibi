import { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./ImageGrid.module.scss";
import { scaleCenterImage, moveUpTitle, introAnimation } from "./animations";

interface ImageGridProps {
  timeline: GSAPTimeline;
}
const ImageGrid: React.FC<ImageGridProps> = ({ timeline }) => {
  const centerImageRef = useRef(null);
  const centerImageWrapperRef = useRef(null);
  const centerImageTitleRef = useRef(null);

  useEffect(() => {
    if (timeline) {
      introAnimation(centerImageWrapperRef.current);

      timeline
        .add(
          scaleCenterImage(
            centerImageWrapperRef.current,
            centerImageRef.current
          ),
          "<"
        )
        .add(moveUpTitle(centerImageTitleRef.current), "<");
    }
  }, [timeline]);

  return (
    <section className={styles.imageGrid}>
      <div className={styles.imageGrid__inner}>
        <div
          onClick={() => timeline?.play()}
          className={styles.imageGrid__imageWrapper}
          ref={centerImageWrapperRef}
          data-wrapper-center
        >
          <div className={styles.textReveal}>
            <h2
              className={styles.imageGrid__imageTitle}
              ref={centerImageTitleRef}
            >
              Re:Active
            </h2>
          </div>
          <Image
            ref={centerImageRef}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fill
            data-image-center
            className={styles.imageGrid__image}
            src="/assets/images/zoom/practice_1.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
