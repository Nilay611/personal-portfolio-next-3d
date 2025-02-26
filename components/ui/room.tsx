import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Room: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, camera } = useThree();
  gsap.registerPlugin(ScrollTrigger);

  const desktopAnimations = useCallback(() => {
    if (!groupRef.current) return;

    camera.zoom = 45;
    groupRef.current.position.set(0, 0, 0);
    groupRef.current.rotation.y = 0;

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl1.to(groupRef.current.position, {
      x: -window.innerWidth * 0.0025,
      z: window.innerWidth * 0.0055,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl2
      .to(groupRef.current.position, {
        x: window.innerHeight * 0.0015,
        y: -window.innerHeight * 0.0035,
        z: -window.innerHeight * 0.00015,
      })
      .to(
        camera,
        {
          zoom: 180,
        },
        "<"
      );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl3
      .to(groupRef.current.rotation, {
        y: Math.PI / 4,
      })
      .to(
        camera,
        {
          zoom: 500,
        },
        "<"
      );

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl4
      .to(camera, {
        zoom: 180,
      })
      .to(
        groupRef.current.position,
        {
          x: window.innerHeight * 0.008,
          y: 0,
          z: -window.innerHeight * 0.0008,
        },
        "<"
      )
      .to(
        groupRef.current.rotation,
        {
          y: 0,
        },
        "<"
      );
  }, [camera]);

  const mobileAnimations = useCallback(() => {
    if (!groupRef.current) return;

    camera.zoom = 20;
    groupRef.current.position.set(0, 0, 0);
    groupRef.current.rotation.y = 0;

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl1.to(camera, {
      zoom: 30,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl2
      .to(camera, {
        zoom: 65,
      })
      .to(
        groupRef.current.position,
        {
          x: -1.5,
          y: -1.5,
          z: 1.5,
        },
        "<"
      );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl3
      .to(groupRef.current.rotation, {
        y: Math.PI / 4,
      })
      .to(
        groupRef.current.position,
        {
          x: 3,
        },
        "<"
      )
      .to(
        camera,
        {
          zoom: 400,
        },
        "<"
      );

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    tl4
      .to(camera, {
        zoom: 180,
      })
      .to(
        groupRef.current.position,
        {
          x: 3,
          y: -3,
          z: -3,
        },
        "<"
      )
      .to(
        groupRef.current.rotation,
        {
          y: 0,
        },
        "<"
      );
  }, [camera]);

  const commonAnimations = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const progressWrapper = section.querySelector(".progress-wrapper");
      const progressBar = section.querySelector(".progress-bar");

      if (section.classList.contains("right")) {
        gsap.to(section, {
          borderTopLeftRadius: 10,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 0.6,
          },
        });

        gsap.to(section, {
          borderBottomLeftRadius: 700,
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      } else {
        gsap.to(section, {
          borderTopRightRadius: 10,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 0.6,
          },
        });

        gsap.to(section, {
          borderBottomRightRadius: 700,
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      gsap.from(progressBar, {
        scaleY: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          pin: progressWrapper,
          pinSpacing: false,
        },
      });
    });
  };

  useEffect(() => {
    const setShadowForChildren = (object: THREE.Object3D) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }

      if (object instanceof THREE.Group || object instanceof THREE.Object3D) {
        object.children.forEach(setShadowForChildren);
      }
    };

    if (groupRef.current) {
      groupRef.current.children.forEach(setShadowForChildren);
    }
  }, [scene]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      //Desktop animations
      mm.add("(min-width: 960px)", () => {
        desktopAnimations();
      });

      //Mobile animations
      mm.add("(max-width: 959px)", () => {
        mobileAnimations();
      });

      //Common animations
      mm.add("all", () => {
        commonAnimations();
      });
    });

    return () => ctx.revert();
  }, [desktopAnimations, mobileAnimations]);

  return <group ref={groupRef}>{children}</group>;
};
