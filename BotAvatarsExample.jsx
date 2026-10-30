import { BotAvatar } from 'bot-avatars';

const agents = [
  { type: 'clover', label: 'Clover', state: 'default' },
  { type: 'star', label: 'Star', size: 36, state: 'working' },
  { type: 'flower', label: 'Flower', face: 'mouth', state: 'working' },
];

export default function BotAvatarsExample() {
  return (
    <div
      aria-label="Bot avatar examples"
      style={{ display: 'flex', alignItems: 'center', gap: 20 }}
    >
      {agents.map((agent) => (
        <div
          key={agent.type}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <BotAvatar {...agent} />
          <span>{agent.label}</span>
        </div>
      ))}
    </div>
  );
}
