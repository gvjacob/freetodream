import * as Accordion from '@radix-ui/react-accordion';

export default function Drawers({ title, items }) {
  return (
    <section>
      <h2>{title}</h2>

      <Accordion.Root type="multiple">
        {items.map(({ header, content }, i) => (
          <Accordion.Item value={`item-${i}`} key={i}>
            <Accordion.Header>
              <Accordion.Trigger>{header}</Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content>{content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
