import { ImageResponse } from 'next/og';

// Route segment config — Next renders this at build time into the OG/Twitter image.
export const alt = 'Meal Direct — Scheduled Campus Meal Delivery';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// NOTE: Satori (next/og) has no network at build time, so avoid emoji and glyphs
// that require a dynamic font download (●, 🍱, etc.). Every element with more than
// one child MUST set display:flex.
function Dot() {
  return <div style={{ width: 14, height: 14, borderRadius: 999, background: '#BDE8D6' }} />;
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0B6B4F 0%, #074C39 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top row: monogram + wordmark, and domain badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 18,
                background: '#BDE8D6',
                color: '#074C39',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 42,
                fontWeight: 800,
              }}
            >
              M
            </div>
            <div style={{ display: 'flex', fontSize: 36, fontWeight: 700, letterSpacing: -0.5 }}>
              Meal Direct
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              fontWeight: 600,
              color: '#BDE8D6',
              border: '2px solid rgba(189,232,214,0.5)',
              borderRadius: 999,
              padding: '10px 26px',
            }}
          >
            mealdirectly.com
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 88, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            <div style={{ display: 'flex' }}>Scheduled Campus</div>
            <div style={{ display: 'flex' }}>Meal Delivery</div>
          </div>
          <div style={{ display: 'flex', fontSize: 33, color: '#BDE8D6', fontWeight: 500, maxWidth: 920 }}>
            Order ahead from verified campus vendors, delivered to your hostel in batches.
          </div>
        </div>

        {/* Bottom feature row */}
        <div style={{ display: 'flex', gap: 44, fontSize: 27, color: 'rgba(255,255,255,0.92)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Dot />
            <div style={{ display: 'flex' }}>Schedule in advance</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Dot />
            <div style={{ display: 'flex' }}>Verified vendors</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Dot />
            <div style={{ display: 'flex' }}>Hostel delivery</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
