# Accordion

`Accordion` припада групи компонената за организовање садржаја. Садржај се кориснику може приказати
или сакрити уз помоћ `Accordion` компоненте.

\<libary_name\> користи три градивна блока за прављење `Accordion` компоненте: 
`Accordion`, `AccordionHeader` и `AccordionPanel`.

`Accordion` компонента представља родитељску компоненту која је задужена за приступачно повезивање
`AccordionHeader` и `AccordionPanel` компоненти.

##### Пример

```jsx
<Accordion>
  <AccordionHeader>
    <span>Click to expand</span>
  </AccordionHeader>
  <AccordionPanel>
    <Paragraph>Some content</Paragraph>
  </AccordionPanel>
</Accordion>
```

