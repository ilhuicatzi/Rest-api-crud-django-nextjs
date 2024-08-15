import { Flex, Card, Heading } from "@radix-ui/themes";
import TableTasks from "./TableTasks";
function CardTable() {
  return (
    <Flex className="col-span-2 pr-2 md:px-5" direction={"column"}>
      <Heading size={"6"} mb={"4"} ml={"2"}>
        Tareas
      </Heading>
      <Card variant="ghost" className="md:pl-2 lg:px-5">
        <TableTasks />
      </Card>
    </Flex>
  );
}

export default CardTable;
