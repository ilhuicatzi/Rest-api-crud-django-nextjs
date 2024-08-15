import { Flex, Badge, Table } from "@radix-ui/themes";
import { dataStatus } from "@/libs/dataTable";
import ModalEdit from "./ModalEdit";
import DeleteButton from "./DeleteButton";

export interface TaskIntef {
  id: number;
  title: string;
  description: string;
  status: string;
}

async function loadTasks() {
  const response = await fetch(`${process.env.BACKEND_URL}/api/tasks/`, { cache: 'no-store' });
  const tasks = await response.json();

  return tasks;
}

async function TableTasks() {
  const dataTasks = await loadTasks().catch((error) => {
    console.error(error);
  });
  console.log(dataTasks);

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Título</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden lg:table-cell">
            Descripción
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden min-[360px]:table-cell">
            Estado
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {dataTasks.map((item: TaskIntef) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell className="hidden lg:table-cell">
              {item.description}
            </Table.Cell>
            <Table.Cell className="hidden min-[360px]:table-cell">
              <Badge
                color={
                  dataStatus.find((status) => status.value === item.status)
                    ?.color
                }
                variant="soft"
                radius="full"
                size="1"
                className="text-xs"
              >
                <Flex align="center" gap="2">
                  <span className="flex justify-center items-center w-4 h-4">
                    {
                      dataStatus.find((status) => status.value === item.status)
                        ?.icon
                    }
                  </span>
                  <span className="hidden lg:flex">
                    {
                      dataStatus.find((status) => status.value === item.status)
                        ?.label
                    }
                  </span>
                </Flex>
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <Flex align="center" gap="2">
                <ModalEdit task={item} />
                <DeleteButton id={item.id} />
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TableTasks;
