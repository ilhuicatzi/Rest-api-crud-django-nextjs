import { Section, Grid } from "@radix-ui/themes";
import CardTasks from "@/components/CardTasks";
import CardTable from "@/components/CardTable";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <Section className="pt-8 px-2 lg:px-6 xl:px-10">
      <Grid columns={{ initial: '1', sm: '3' }} gapY={"5"}>
        <CardTasks/>
        <CardTable/>
      </Grid>
    </Section>
  );
}
