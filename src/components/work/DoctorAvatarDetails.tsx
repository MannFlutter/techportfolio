import Link from "next/link";
import { CaseStudySection } from "@/components/work/CaseStudySection";

const poses = [
  {
    name: "Idle",
    detail: "The doctor blinks, breathes subtly, and maintains gentle eye contact with a slight head drift. The hands stay lowered, and a small weight shift runs only when no other motion is active.",
  },
  {
    name: "Greeting",
    detail: "One arm lifts and waves side to side with gentle wrist motion and a small shoulder lift. A soft head tilt, slight smile, and raised brows accompany the wave. The other hand stays down.",
  },
  {
    name: "Listening",
    detail: "The hand moves toward the ear and slightly toward the camera to avoid clipping into the head. The doctor tilts toward the patient and occasionally gives a single nod, with a calm expression and the existing listening gaze.",
  },
  {
    name: "Thinking",
    detail: "The hand rests near the chin with the wrist offset from the face and the fingers relaxed. The brow conveys concentration as the eyes look up and to the side and the head pauses.",
  },
  {
    name: "Speaking",
    detail: "Outside the greeting, one hand lifts slightly and infrequently while the brows rise. The mouth follows the spoken line. The speaking gesture respects any active wave, ear, or chin gesture.",
  },
];

const commands = [
  { names: "setSpeaking, setThinking, setListening", purpose: "Select the assistant pose." },
  { names: "setViseme", purpose: "Set the mouth shape." },
  { names: "playGesture('hello')", purpose: "Start the greeting wave." },
  { names: "setHalfBody", purpose: "Switch the camera framing." },
];

export function DoctorAvatarDetails() {
  return (
    <>
      <CaseStudySection title="Patient interaction">
        <p className="max-w-[70ch] leading-relaxed text-text-secondary">
          The character appears once the patient list is ready and the Ask me overlay opens. The wave starts with
          &ldquo;Hello {"{name}"}, how are you?&rdquo; The doctor then listens and speaks the reply with lip sync.
          If it suggests a checkup, it also speaks the follow-up question. The patient’s yes or no response continues
          through the existing reports path.
        </p>
        <p className="mt-3 max-w-[70ch] leading-relaxed text-text-secondary">
          Registration, tests, reports, speech recognition, Gemini speech, and the socket continue to use the existing
          clinic workflow. <Link href="/work/odigo-clinic" className="text-signal underline underline-offset-4">View the Assistant Robot case study</Link>
        </p>
      </CaseStudySection>

      <CaseStudySection title="Flutter and WebView">
        <p className="max-w-[70ch] leading-relaxed text-text-secondary">
          Flutter owns the assistant session and sends presentation commands to the WebView. The page stays mounted
          and moves off-screen when the overlay closes, so reopening it can reuse the loaded doctor.
        </p>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {commands.map(({ names, purpose }) => (
            <div key={names} className="min-w-0 rounded-lg border border-border bg-surface p-4">
              <dt className="font-mono text-xs break-words text-signal">{names}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{purpose}</dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection title="Procedural poses">
        <p className="max-w-[70ch] leading-relaxed text-text-secondary">
          Each frame starts from the skeleton’s rest pose, which prevents rotations from accumulating. The same GLB
          preserves the doctor’s face, clothing, body, and identity. Flutter and Three.js handle the animation without
          an additional animation library.
        </p>
        <p className="mt-3 max-w-[70ch] leading-relaxed text-text-secondary">
          Only one assistant pose is active at a time. Speaking takes priority over thinking, followed by listening and
          idle. Switching to listening fades the wave out over about half a second.
        </p>
        <dl className="mt-5 divide-y divide-border rounded-lg border border-border bg-surface">
          {poses.map(({ name, detail }) => (
            <div key={name} className="grid gap-1.5 p-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="font-medium text-text-primary">{name}</dt>
              <dd className="text-sm leading-relaxed text-text-secondary">{detail}</dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection title="Lip sync">
        <p className="max-w-[70ch] leading-relaxed text-text-secondary">
          Flutter maps the spoken text to mouth shapes, including a lightweight Hindi mapping, and fits the sequence to
          the length of each spoken line. Three.js blends those shapes through the model’s facial morph targets.
          The model keeps its blink and expression shapes and drops unused face shapes after load to preserve the
          resting face.
        </p>
        <p className="mt-3 max-w-[70ch] font-mono text-sm leading-relaxed text-signal">
          sil, PP, FF, TH, DD, kk, CH, SS, nn, RR, aa, E, I, O, U
        </p>
        <p className="mt-3 max-w-[70ch] leading-relaxed text-text-secondary">
          Lip sync runs for the greeting, reply, follow-up question, and Hindi replay. The mouth closes at the end of each line.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Camera framing">
        <p className="max-w-[70ch] leading-relaxed text-text-secondary">
          Half body is the default and frames the head, shoulders, and chest. Full body shows the standing figure.
          The operator’s &ldquo;Show half body&rdquo; switch updates the live camera without reloading the model, and the
          preference persists across logout.
        </p>
      </CaseStudySection>
    </>
  );
}
