import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const limit = 700;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.slice(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        marginLeft={2}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
