import { useState } from 'react';
import { Liquid } from 'liquid-gooey';

export default function LiquidGooeyExample() {
  const [open, setOpen] = useState(false);

  return (
    <Liquid
      blur={6}
      contrast={18}
      fill="#fff"
      style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 104 }}
    >
      <Liquid.Item x={open ? -54 : 0} y={open ? -34 : 0} transition="bouncy">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          style={{ border: 0, borderRadius: 999, padding: '14px 20px', cursor: 'pointer' }}
        >
          {open ? 'Close' : 'Open'}
        </button>
      </Liquid.Item>
      <Liquid.Item x={open ? 54 : 0} y={open ? 34 : 0} transition="bouncy">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          style={{ border: 0, borderRadius: 999, padding: '14px 20px', cursor: 'pointer' }}
        >
          {open ? 'Done' : 'More'}
        </button>
      </Liquid.Item>
    </Liquid>
  );
}
