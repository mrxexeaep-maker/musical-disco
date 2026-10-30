import { useState } from 'react';
import { VoiceBeam, useMicrophone } from 'voice-glow';

export default function VoiceBeamExample({ children, processing = false }) {
  const mic = useMicrophone();
  const [error, setError] = useState('');

  const toggleMicrophone = async () => {
    setError('');

    if (mic.state === 'live') {
      mic.stop();
      return;
    }

    try {
      await mic.start();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Microphone access failed.');
    }
  };

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <VoiceBeam stream={mic.stream} processing={processing}>
        {children ?? (
          <div style={{ borderRadius: 16, padding: 20, background: '#1d1d1d', color: '#fff' }}>
            Speak to activate the beam
          </div>
        )}
      </VoiceBeam>
      <button type="button" onClick={toggleMicrophone}>
        {mic.state === 'live' ? 'Stop listening' : 'Listen'}
      </button>
      {error || mic.error ? <p role="status">{error || mic.error.message}</p> : null}
    </div>
  );
}
