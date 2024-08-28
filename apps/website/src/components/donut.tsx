import Spline from "@splinetool/react-spline/next";

export async function Donut() {
  return (
    <div className="animate-webgl-scale-in-fade">
      <Spline
        scene="https://prod.spline.design/a2EvQ48Vg9RaTkVF/scene.splinecode"
        style={{
          width: "auto",
          height: "auto",
          background: "transparent",
        }}
      />
    </div>
  );
}
