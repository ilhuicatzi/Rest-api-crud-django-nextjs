import { Flex, Card, Heading} from "@radix-ui/themes";
import FormTasks from "./FormTasks";
import CardUser from "./CardUser";
function CardTasks() {
  return (
    <Flex direction={"column"} gapY={"3"}>
      <Heading size={"6"} mb={"2"} ml={"3"}>
        Nueva Tarea
      </Heading>
      <div className="grid grid-cols-1 min-[520px]:grid-cols-2 md:grid-cols-1 gap-3">
      <Card className="w-full min-[520px]:max-w-[320px] p-5">
        <FormTasks />
      </Card>
      <CardUser />
      </div>
    </Flex>
  );
}

export default CardTasks;
