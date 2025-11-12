"use client";

export default function NoFaceText({ className = "text-xl font-bold" }: { className?: string }) {
  return (
    <span className={`${className} flex items-center`}>
      <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
        No
      </span>
      <span className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
        Face
      </span>
    </span>
  );
}