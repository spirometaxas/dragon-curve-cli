# dragon-curve-cli
Print the [Dragon Curve](https://en.wikipedia.org/wiki/Dragon_curve) to the console!

![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-banner.png)

[![npm version](https://img.shields.io/npm/v/dragon-curve-cli)](https://www.npmjs.com/package/dragon-curve-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/dragon-curve-cli)](https://bundlephobia.com/package/dragon-curve-cli)
[![downloads](https://img.shields.io/npm/dy/dragon-curve-cli)](https://www.npmjs.com/package/dragon-curve-cli)
[![license](https://img.shields.io/npm/l/dragon-curve-cli)](https://github.com/spirometaxas/dragon-curve-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx dragon-curve-cli <n>
$ npx dragon-curve-cli <n> [options]
```
where `n >= 0`.

### Via Global Install
```
$ npm install --global dragon-curve-cli
$ dragon-curve-cli <n>
$ dragon-curve-cli <n> [options]
```
where `n >= 0`.

### Via Import
```
$ npm install dragon-curve-cli
```
then:
```
const dragon_curve = require('dragon-curve-cli');
console.log(dragon_curve.create(<n>);
console.log(dragon_curve.create(<n>, { 
    inverse: <boolean>,
    rotation: <left|right|flip|standard>,
    line: <bold|double|standard> 
});
```
The config params are optional. 

## Options
### Recursive Step  
```
$ dragon-curve-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ dragon-curve-cli 7
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-7.png)

```
$ dragon-curve-cli 9
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9.png)

### Inverse
```
$ dragon-curve-cli <n> --inverse
```
The optional `--inverse` param (or shorthand `-i`) will draw the inverse Dragon Curve.  

#### Example:
```
$ dragon-curve-cli 9 --inverse
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9-inverse.png)

### Rotation
```
$ dragon-curve-cli <n> --rotate=<left|right|flip|standard>
```
The optional `--rotate` param rotates the Dragon Curve.  Supported values:

- `left`: Rotate left 90 degrees
- `right`: Rotate right 90 degrees
- `flip`: Rotate 180 degrees
- `standard`: No rotation (default)

#### Example:
```
$ dragon-curve-cli 9 --rotate=right
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9-rotate_right.png)

```
$ dragon-curve-cli 9 --rotate=flip
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9-rotate_flip.png)

```
$ dragon-curve-cli 9 --rotate=left
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9-rotate_left.png)

### Line Type
```
$ dragon-curve-cli <n> --line=<bold|double|standard>
```
The optional `--line` param draws the Dragon Curve using different line types.  Supported values:

- `bold`: Draw using bold lines
- `double`: Draw using double lines
- `standard`: Draw using standard lines (default)

#### Examples:
```
$ dragon-curve-cli 9 --line=bold
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9-line_bold.png)

```
$ dragon-curve-cli 9 --line=double
```
![What dragon-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/dragon-curve-cli/main/img/dragon-curve-9-line_double.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/dragon-curve-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)