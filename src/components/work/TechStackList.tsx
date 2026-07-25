import { Badge } from "@/components/ui/Badge";

type TechStackListProps = {
  tech: string[];
};

export function TechStackList({ tech }: TechStackListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
