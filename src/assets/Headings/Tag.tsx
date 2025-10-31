interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <div className="flex items-center">
      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
      <span>{text}</span>
    </div>
  );
}
