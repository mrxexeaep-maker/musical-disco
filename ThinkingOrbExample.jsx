import { ThinkingOrb } from 'thinking-orbs';

const STATES = [
  'working',
  'searching',
  'solving',
  'listening',
  'connecting',
  'weaving',
  'composing',
  'breathing',
  'shaping',
];

export default function ThinkingOrbExample({ state = 'searching', size = 64 }) {
  return (
    <div
      aria-label="Thinking orb animation states"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(92px, 1fr))',
        alignItems: 'center',
        gap: 16,
      }}
    >
      {STATES.map((orbState) => (
        <div
          key={orbState}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <ThinkingOrb
            state={orbState}
            size={orbState === state ? size : 32}
            aria-label={`${orbState} thinking`}
          />
          <span>{orbState}</span>
        </div>
      ))}
    </div>
  );
}
