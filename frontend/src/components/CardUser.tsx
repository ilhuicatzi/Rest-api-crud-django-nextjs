import {
  Flex,
  Card,
  DataList,
  Badge,
  IconButton,
  Link,
  Code,
} from "@radix-ui/themes";
import { Copy } from "lucide-react";
function CardUser() {
  return (
    <Card className="w-full min-[520px]:max-w-[320px] pl-5 ">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft" radius="full">
              Authorized
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">ID</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">u_2J89JSA4GJ</Code>
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost"
              >
                <Copy height={14} width={14} />
              </IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Name</DataList.Label>
          <DataList.Value>Vlad Moroz</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  );
}

export default CardUser;
