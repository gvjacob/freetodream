import cn from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';

export default function Drawers({ title, items }) {
  return (
    <section className="py-2">
      {title && <h3 className="mb-2 text-xs uppercase">{title}</h3>}

      <Accordion.Root type="single" collapsible>
        {items.map(({ header, content }, i) => (
          <Accordion.Item className="border-t-[1px] border-black py-2" value={`item-${i}`} key={i}>
            <Accordion.Header>
              <Accordion.Trigger
                className={cn(
                  'w-full flex justify-between items-start',
                  'font-semibold text-left',
                  'group transition-colors hocus:text-gray-500',
                )}
              >
                {header}

                <div
                  className={cn(
                    'relative w-3 aspect-square mt-1.5 flex-shrink-0 ml-1',
                    'before:absolute before:top-1/2 before:w-full before:border-b-[2px] before:border-black',
                    'after:absolute after:top-1/2 after:w-full after:border-b-[2px] after:border-black after:rotate-90',
                    'after:transition-transform group-[[data-state="open"]]:after:rotate-0',
                  )}
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="py-2 mb-4">{content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}