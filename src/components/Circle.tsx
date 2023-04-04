import React from "react";

export function Circle({ number }: { number: string }) {
  return (
    <div className="w-16 h-16 bg-green-400  rounded-full	flex justify-center	items-center">
      <h1 className="text-white font-bold text-lg">{number}</h1>
    </div>
  );
}
