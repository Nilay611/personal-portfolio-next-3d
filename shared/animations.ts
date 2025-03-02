import { Object3D, OrthographicCamera } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const desktopAnimations = (
  groupRef: Object3D,
  tabletRef: Object3D,
  camera: OrthographicCamera
) => {
  camera.zoom = 180;
  groupRef.position.set(0, 0, 0);
  groupRef.rotation.y = 0;

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-move",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
    },
  });

  tl1.to(groupRef.position, {
    x: -window.innerWidth * 0.0006,
    z: window.innerWidth * 0.0013,
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
    .to(groupRef.position, {
      x: window.innerWidth * 0.0001,
      y: -window.innerHeight * 0.0007,
      z: -window.innerWidth * 0.00001,
    })
    .to(
      camera,
      {
        zoom: window.innerWidth * 0.3,
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
    .to(groupRef.rotation, {
      y: Math.PI / 4,
    })
    .to(
      camera,
      {
        zoom: window.innerHeight * 1.5,
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
      zoom: window.innerWidth * 0.3,
    })
    .to(
      groupRef.position,
      {
        x: window.innerWidth * 0.00012,
        y: -window.innerHeight * 0.0007,
        z: -window.innerWidth * 0.000065,
      },
      "<"
    )
    .to(
      groupRef.rotation,
      {
        y: -Math.PI / 4,
      },
      "<"
    );
};

export const mobileAnimations = (
  groupRef: Object3D,
  camera: OrthographicCamera
) => {
  camera.zoom = 100;
  groupRef.position.set(0, 0, -0.25);
  groupRef.rotation.y = 0;

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-move",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
    },
  });

  tl1.to(camera, {
    zoom: window.innerHeight * 0.1,
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
      zoom: window.innerHeight * 0.25,
    })
    .to(
      groupRef.position,
      {
        x: -0.5,
        y: -0.5,
        z: 0.5,
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
    .to(groupRef.rotation, {
      y: Math.PI / 4,
    })
    .to(
      groupRef.position,
      {
        x: 0.5,
      },
      "<"
    )
    .to(
      camera,
      {
        zoom: window.innerHeight * 0.5,
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
    .to(
      groupRef.position,
      {
        x: 0.5,
        y: -1,
        z: -0.5,
      },
      "<"
    )
    .to(
      groupRef.rotation,
      {
        y: -Math.PI / 4,
      },
      "<"
    );
};

export const commonAnimations = (floorRef: Object3D) => {
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

  gsap.to(floorRef.scale, {
    x: 0.5,
    y: 0.5,
    z: 0.5,
    scrollTrigger: {
      trigger: ".first-move",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
    },
  });
};
