jQuery.noConflict()(function($) {
    /*
    let bg = document.querySelector('.elementor-background-overlay');
    let bg_sect = document.querySelector('.elementor-section');

    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 5 + 'px)';
        bg_sect.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });*/


    function fl_add_clip_path_ecata_circle(){
        var fl_clip_path_class = $('.tm-bg-figure-fl_ecata_circle');
        var fl_clip_path_id = fl_clip_path_class.data('id');
        fl_clip_path_class.append('' +
            '<svg style="position: absolute" height="0" width="0">\n' +
                '<defs>\n' +
                    '<clipPath id="fl_ecata_circle_' + fl_clip_path_id + '">\n' +
                        '<path fill="#FFFFFF" stroke="#000000" stroke-width="1.5794" stroke-miterlimit="10" d="M-33.13,665.078c119.556,49.787,306.1,83.943,633.02,53.253,249.767-23.447,384.357-86.409,634.65-95.314,296.89-10.564,477.11-17.262,786.46,35.151,539.46,91.4,881.91,51.992,1006.59-28.786,225.75-146.249,174.46-360.4-2.85-547.215C2490.53-480.666,359.15-442.582-93.408,97.564-238.65,270.915-276.1,563.9-33.13,665.078Z"/>\n                                ' +
                    '</clipPath>\n ' +
                '</defs>\n' +
            '</svg>' +
            '<style>' +
            '.tm-bg-figure-fl_ecata_circle{\n' +
            '  clip-path: url(#fl_ecata_circle_' + fl_clip_path_id + ');\n' +
            '}' +
            '</style>');
    }

    function fl_add_clip_path_custom(){
        var fl_clip_path_class = $('.tm-bg-figure-fl_custom');
        var fl_clip_path_id = fl_clip_path_class.data('id');
        fl_clip_path_class.append('' +
            '<svg style="position: absolute" height="0" width="0">\n' +
            '<defs>\n' +
            '<clipPath id="fl_custom_' + fl_clip_path_id + '">\n' +
            '<path fill="#FFFFFF" stroke="#000000" stroke-width="1.5794" stroke-miterlimit="10" d="M1037 840L850 494q30-68 30-142q0-96-47.5-177T704 47T528 0q-58 0-111.5 18T320 68.5T244 144t-50.5 97T176 352q0 26 3.5 51t10.5 48t17 46L19 840q-10 18 2.5 34.5T54 886l161-36l55 153q7 19 28 21h2q19 0 28-17l164-305q18 2 36 2q5 0 10.5-.5t11-.5t11.5-1l167 305q9 17 28 17h3q20-2 27-21l55-153l161 36q9 3 18-.5t14-10.5q13-17 3-35zm-731 73l-40-112q-3-7-9-12.5t-13.5-7.5t-15.5 0l-119 27l136-247q70 94 181 128zm-66-561q0-119 84.5-203.5T528 64q78 0 144 38.5t104.5 105T815 352q0 39-10 76.5t-28.5 69t-45.5 58t-58.5 45t-68.5 29t-76 10.5q-78 0-144.5-39t-105-105T240 352zm588 429q-12-3-22.5 3T790 801l-40 113l-123-224q56-17 103.5-50.5T812 559l135 249z"/>\n                                ' +
            '</clipPath>\n ' +
            '</defs>\n' +
            '</svg>' +
            '<style>' +
            '.tm-bg-figure-fl_custom{\n' +
            '  clip-path: url(#fl_custom_' + fl_clip_path_id + ');\n' +
            '}' +
            '</style>');
    }


    fl_add_clip_path_ecata_circle();
   // fl_add_clip_path_custom();
});