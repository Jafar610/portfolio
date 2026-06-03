import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const animateOutline = () => {
      outlinePos.current.x += (pos.current.x - outlinePos.current.x) * 0.12;
      outlinePos.current.y += (pos.current.y - outlinePos.current.y) * 0.12;
      outline.style.left = outlinePos.current.x + 'px';
      outline.style.top = outlinePos.current.y + 'px';
      rafRef.current = requestAnimationFrame(animateOutline);
    };

    const onMouseEnterLink = () => outline.classList.add('hover');
    const onMouseLeaveLink = () => outline.classList.remove('hover');

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animateOutline);

    const interactables = document.querySelectorAll('a, button, .skill-icon-card, .project-card, .social-icon, [data-cursor]');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;
