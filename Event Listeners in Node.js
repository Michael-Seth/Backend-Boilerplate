<mxfile host="app.diagrams.net" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36" version="24.7.16">
  <diagram name="Page-1" id="y3WMCreIm_1yrp7hCgig">
    <mxGraphModel>
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="2" value="Publisher" style="whiteSpace=wrap;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="8" y="57" width="126" height="49" as="geometry" />
        </mxCell>
        <mxCell id="3" value="Message Broker" style="whiteSpace=wrap;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="320" y="57" width="171" height="49" as="geometry" />
        </mxCell>
        <mxCell id="4" value="Subscriber 1" style="whiteSpace=wrap;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="695" y="8" width="148" height="49" as="geometry" />
        </mxCell>
        <mxCell id="5" value="Subscriber 2" style="whiteSpace=wrap;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="695" y="107" width="148" height="49" as="geometry" />
        </mxCell>
        <mxCell id="6" value="Publishes message" style="curved=1;startArrow=none;endArrow=block;exitX=1;exitY=0.5;entryX=0;entryY=0.5;" edge="1" parent="1" source="2" target="3">
          <mxGeometry relative="1" as="geometry">
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="7" value="Forwards message to" style="curved=1;startArrow=none;endArrow=block;exitX=1;exitY=0.04;entryX=0;entryY=0.5;" edge="1" parent="1" source="3" target="4">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="593" y="32" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="8" value="Forwards message to" style="curved=1;startArrow=none;endArrow=block;exitX=1;exitY=0.96;entryX=0;entryY=0.49;" edge="1" parent="1" source="3" target="5">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="593" y="131" />
            </Array>
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
