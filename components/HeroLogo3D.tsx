'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type HeroLogo3DProps = {
  autoRotate?: boolean;
  finish?: 'Emerald' | 'Charcoal';
};

const FINISH_HEX = { Emerald: 0x0b6b4f, Charcoal: 0x243b32 } as const;

function buildLogo(finishHex: number) {
  const WHITE = 0xf4f5f2;
  const DARK = 0x0a2c1e;

  const green = new THREE.MeshStandardMaterial({ color: finishHex, roughness: 0.42, metalness: 0.12 });
  green.name = 'shell_green';
  const white = new THREE.MeshStandardMaterial({ color: WHITE, roughness: 0.5, metalness: 0 });
  white.name = 'face_white';
  const dark = new THREE.MeshStandardMaterial({ color: DARK, roughness: 0.38, metalness: 0.25 });
  dark.name = 'trim_dark';

  const model = new THREE.Group();
  model.name = 'skateboard_cloche_logo';

  // Wheels, axles and trucks
  const wheelR = 0.045;
  const wheelW = 0.032;
  const wheelGeo = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 28);
  const wheelXs = [-0.28, 0.28];
  const wheelZs = [-0.085, 0.085];
  wheelXs.forEach((x) => {
    wheelZs.forEach((z) => {
      const wheel = new THREE.Mesh(wheelGeo, dark);
      wheel.name = 'wheel';
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(x, wheelR, z);
      model.add(wheel);
    });
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 12), dark);
    axle.name = 'axle';
    axle.rotation.x = Math.PI / 2;
    axle.position.set(x, wheelR, 0);
    model.add(axle);
    const truck = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.03, 0.1), dark);
    truck.name = 'truck';
    truck.position.set(x, wheelR * 2 + 0.015, 0);
    model.add(truck);
  });

  // Deck
  const deckLen = 0.85;
  const deckWid = 0.22;
  const deckThick = 0.02;
  const corner = 0.05;
  const dl = deckLen / 2;
  const dw = deckWid / 2;
  const s = new THREE.Shape();
  s.moveTo(-dl + corner, -dw);
  s.lineTo(dl - corner, -dw);
  s.quadraticCurveTo(dl, -dw, dl, -dw + corner);
  s.lineTo(dl, dw - corner);
  s.quadraticCurveTo(dl, dw, dl - corner, dw);
  s.lineTo(-dl + corner, dw);
  s.quadraticCurveTo(-dl, dw, -dl, dw - corner);
  s.lineTo(-dl, -dw + corner);
  s.quadraticCurveTo(-dl, -dw, -dl + corner, -dw);
  const deckGeo = new THREE.ExtrudeGeometry(s, { depth: deckThick, bevelEnabled: false, curveSegments: 16 });
  deckGeo.rotateX(-Math.PI / 2);
  deckGeo.center();
  const deckBottomY = wheelR * 2 + 0.015 + 0.015;
  const deck = new THREE.Mesh(deckGeo, green);
  deck.name = 'deck';
  deck.position.y = deckBottomY + deckThick / 2;
  model.add(deck);
  const deckTopY = deck.position.y + deckThick / 2;

  // Cloche dome
  const domeRadius = 0.15;
  const rimHeight = 0.02;
  const rim = new THREE.Mesh(
    new THREE.CylinderGeometry(domeRadius * 1.05, domeRadius * 1.05, rimHeight, 40),
    green
  );
  rim.name = 'rim';
  rim.position.y = deckTopY + rimHeight / 2;
  model.add(rim);
  const domeCenterY = deckTopY + rimHeight;
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(domeRadius, 40, 24, 0, Math.PI * 2, 0, Math.PI / 2),
    green
  );
  dome.name = 'dome_shell';
  dome.position.y = domeCenterY;
  model.add(dome);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(domeRadius, 40), green);
  cap.name = 'dome_base_cap';
  cap.rotation.x = -Math.PI / 2;
  cap.position.y = domeCenterY;
  model.add(cap);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.02, 16), green);
  stem.name = 'knob_stem';
  stem.position.y = domeCenterY + domeRadius + 0.01;
  model.add(stem);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.02, 20, 16), green);
  knob.name = 'knob';
  knob.position.y = domeCenterY + domeRadius + 0.028;
  model.add(knob);

  // Front window with the "M" mark
  const holeD = 0.145;
  const holeR = 0.075;
  const holeDy = 0.02;
  const holeGeo = new THREE.CylinderGeometry(holeR, holeR, 0.02, 40);
  holeGeo.rotateX(Math.PI / 2);
  const hole = new THREE.Mesh(holeGeo, white);
  hole.name = 'window_white';
  hole.position.set(0, domeCenterY + holeDy, holeD);
  model.add(hole);

  const m = new THREE.Shape();
  m.moveTo(0, 0);
  m.lineTo(0, 1);
  m.lineTo(0.22, 1);
  m.lineTo(0.5, 0.45);
  m.lineTo(0.78, 1);
  m.lineTo(1, 1);
  m.lineTo(1, 0);
  m.lineTo(0.8, 0);
  m.lineTo(0.8, 0.62);
  m.lineTo(0.5, 0.15);
  m.lineTo(0.2, 0.62);
  m.lineTo(0.2, 0);
  m.closePath();
  const mGeo = new THREE.ExtrudeGeometry(m, { depth: 0.02, bevelEnabled: false, curveSegments: 8 });
  mGeo.center();
  mGeo.scale(0.13, 0.13, 1);
  const mMesh = new THREE.Mesh(mGeo, green);
  mMesh.name = 'letter_M';
  mMesh.position.set(0, domeCenterY + holeDy, holeD + 0.011);
  model.add(mMesh);

  // Motion arrows on both sides
  const buildArrow = () => {
    const g = new THREE.Group();
    const tri = new THREE.Shape();
    tri.moveTo(0, 0.022);
    tri.lineTo(-0.03, 0.04);
    tri.lineTo(-0.014, 0.022);
    tri.lineTo(-0.03, 0.004);
    tri.closePath();
    const triGeo = new THREE.ExtrudeGeometry(tri, { depth: 0.012, bevelEnabled: false });
    triGeo.center();
    const head = new THREE.Mesh(triGeo, green);
    head.name = 'arrow_head';
    g.add(head);
    const dashGeo = new THREE.BoxGeometry(0.022, 0.008, 0.012);
    [0.05, 0.09].forEach((dx, i) => {
      const dash = new THREE.Mesh(dashGeo, green);
      dash.name = 'arrow_dash';
      dash.position.x = -dx;
      dash.scale.x = 1 - i * 0.15;
      g.add(dash);
    });
    return g;
  };
  const arrowY = domeCenterY + holeDy;
  const aR = buildArrow();
  aR.position.set(domeRadius * 1.05 + 0.06, arrowY, 0.03);
  aR.name = 'arrow_right';
  model.add(aR);
  const aL = buildArrow();
  aL.rotation.y = Math.PI;
  aL.position.set(-(domeRadius * 1.05 + 0.06), arrowY, 0.03);
  aL.name = 'arrow_left';
  model.add(aL);

  return { model, green };
}

export default function HeroLogo3D({ autoRotate = true, finish = 'Emerald' }: HeroLogo3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef(autoRotate);
  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    materialRef.current?.color.set(FINISH_HEX[finish]);
  }, [finish]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe6dc, 1.05));
    const key = new THREE.DirectionalLight(0xffffff, 2.3);
    key.position.set(4, 7, 6);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xeafaf2, 0.6);
    fill.position.set(-5, 2, -4);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, 0.5);
    rim.position.set(0, 3, -6);
    scene.add(rim);

    const { model, green } = buildLogo(FINISH_HEX[finish]);
    materialRef.current = green;

    const box = new THREE.Box3().setFromObject(model);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const dist = (sphere.radius / Math.tan((camera.fov * Math.PI) / 360)) * 1.08;
    model.position.sub(sphere.center);

    const spin = new THREE.Group();
    spin.add(model);
    scene.add(spin);
    camera.position.set(0, 0.12, dist);
    camera.lookAt(0, 0.02, 0);

    const fit = () => {
      const w = wrap.clientWidth || 1;
      const h = wrap.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);

    let rotY = -0.35;
    let rotX = 0.09;
    let userY = 0;
    let userX = 0;
    let dragging = false;
    let px = 0;
    let py = 0;

    const onDown = (e: PointerEvent) => {
      dragging = true;
      px = e.clientX;
      py = e.clientY;
      wrap.style.cursor = 'grabbing';
      wrap.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      userY += (e.clientX - px) * 0.009;
      userX += (e.clientY - py) * 0.006;
      userX = Math.max(-0.6, Math.min(0.6, userX));
      px = e.clientX;
      py = e.clientY;
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      wrap.style.cursor = 'grab';
      try {
        wrap.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
    };
    wrap.addEventListener('pointerdown', onDown);
    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerup', onUp);
    wrap.addEventListener('pointerleave', onUp);

    renderer.setAnimationLoop(() => {
      const t = performance.now() / 1000;
      const sway = !dragging && autoRotateRef.current ? Math.sin(t * 0.45) * 0.5 : 0;
      const targetY = -0.28 + userY + sway;
      const targetX = 0.09 + userX;
      rotY += (targetY - rotY) * 0.08;
      rotX += (targetX - rotX) * 0.08;
      spin.rotation.y = rotY;
      spin.rotation.x = rotX;
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      ro.disconnect();
      wrap.removeEventListener('pointerdown', onDown);
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerup', onUp);
      wrap.removeEventListener('pointerleave', onUp);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mat = obj.material;
          (Array.isArray(mat) ? mat : [mat]).forEach((m) => m.dispose());
        }
      });
      materialRef.current = null;
      renderer.dispose();
    };
    // Rebuilding on finish change is handled by the color-set effect above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 z-[1] cursor-grab touch-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
