/*
    Copyright (c) 2020 Nicolas Dufresne, Rainbox Productions

	https://rainboxlab.org

	This file is part of DuNull.

    DuNull is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    DuNull is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with DuNull. If not, see <http://www.gnu.org/licenses/>.

*/

(function(){
    var comp = app.project.activeItem;
    if (!comp) return;
    if (!(comp instanceof CompItem)) return;

    var nullLayer = comp.layers.addShape();
    nullLayer.guideLayer = true;
    nullLayer.name = "Null";

    var squareGroup = nullLayer("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    squareGroup.name = 'icon';
    var squareContent = squareGroup.property("ADBE Vectors Group");
    var square = squareContent.addProperty("ADBE Vector Shape - Rect");
    var stroke = squareContent.addProperty("ADBE Vector Graphic - Stroke");
    stroke("ADBE Vector Stroke Color").setValue([1,0,0,1]);
    stroke("ADBE Vector Stroke Width").setValue(1);
    stroke("ADBE Vector Stroke Line Cap").setValue(2);
    stroke("ADBE Vector Stroke Dashes").addProperty( "ADBE Vector Stroke Dash 1" );
    stroke("ADBE Vector Stroke Dashes")("ADBE Vector Stroke Dash 1").setValue(2);
})();