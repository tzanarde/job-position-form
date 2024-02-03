let formations_quantity = 0;

function addFormation() {
    // ------------------ Capturing elements ------------------

    // formation-container div
    let formation_container = document.getElementById('formation-container');

    // ------------------ Creating elements ------------------

    // form-input-box div
    let form_input_box_internal = document.createElement('div');
    form_input_box_internal.classList.add('form-input-box-internal');

    let formation_title = document.createElement('p');
    formation_title.classList.add('group-title');
    formation_title.innerText = 'Formação ' + (formations_quantity + 1);

    // Set parenting
    form_input_box_internal.append(formation_title);
    formation_container.append(form_input_box_internal);

    // ------- course-institution -------

    // form-input-box div - div
    let course_institution_form_input_box = document.createElement('div');
    course_institution_form_input_box.classList.add('form-input-box');

    // label
    let course_institution_label = document.createElement('label');
    course_institution_label.setAttribute('for', 'course-institution-' + (formations_quantity + 1));
    course_institution_label.innerText = 'Instituição';

    // input
    let course_institution_input = document.createElement('input');
    course_institution_input.setAttribute('type', 'text');
    course_institution_input.setAttribute('name', 'course-institution-' + (formations_quantity + 1));
    course_institution_input.setAttribute('id', 'course-institution-' + (formations_quantity + 1));

    // Set parenting
    course_institution_form_input_box.append(course_institution_label);
    course_institution_form_input_box.append(course_institution_input);
    form_input_box_internal.append(course_institution_form_input_box);

    // ------- course-type -------

    // form-input-box div - div
    let course_type_form_input_box = document.createElement('div');
    course_type_form_input_box.classList.add('form-input-box');

    // label
    let course_type_institution_label = document.createElement('label');
    course_type_institution_label.setAttribute('for', 'course-type-' + (formations_quantity + 1));
    course_type_institution_label.innerText = 'Tipo de Curso';

    // select
    let course_type_institution_select = document.createElement('select');
    course_type_institution_select.setAttribute('name', 'course-type-' + (formations_quantity + 1));
    course_type_institution_select.setAttribute('id', 'course-type-' + (formations_quantity + 1));

    // options
    let course_type_option_choose_an_option_institution_input = document.createElement('option');
    course_type_option_choose_an_option_institution_input.setAttribute('value', 'choose-an-option-' + (formations_quantity + 1));
    course_type_option_choose_an_option_institution_input.innerText = 'Escolha uma opção';

    let course_type_option_post_doctoral_institution_input = document.createElement('option');
    course_type_option_post_doctoral_institution_input.setAttribute('value', 'post-doctoral-' + (formations_quantity + 1));
    course_type_option_post_doctoral_institution_input.innerText = 'Pós-Doutorado';

    let course_type_option_doctorate_institution_input = document.createElement('option');
    course_type_option_doctorate_institution_input.setAttribute('value', 'doctorate-' + (formations_quantity + 1));
    course_type_option_doctorate_institution_input.innerText = 'Doutorado';

    let course_type_option_masters_institution_input = document.createElement('option');
    course_type_option_masters_institution_input.setAttribute('value', 'masters-' + (formations_quantity + 1));
    course_type_option_masters_institution_input.innerText = 'Mestrado';

    let course_type_option_post_graduation_institution_input = document.createElement('option');
    course_type_option_post_graduation_institution_input.setAttribute('value', 'post-graduation-' + (formations_quantity + 1));
    course_type_option_post_graduation_institution_input.innerText = 'Pós-Graduação';

    let course_type_option_graduation_institution_input = document.createElement('option');
    course_type_option_graduation_institution_input.setAttribute('value', 'graduation-' + (formations_quantity + 1));
    course_type_option_graduation_institution_input.innerText = 'Graduação';

    let course_type_option_technician_institution_input = document.createElement('option');
    course_type_option_technician_institution_input.setAttribute('value', 'technician-' + (formations_quantity + 1));
    course_type_option_technician_institution_input.innerText = 'Técnico';

    // Set parenting
    course_type_form_input_box.append(course_type_institution_label);
    course_type_institution_select.append(course_type_option_choose_an_option_institution_input);
    course_type_institution_select.append(course_type_option_post_doctoral_institution_input);
    course_type_institution_select.append(course_type_option_doctorate_institution_input);
    course_type_institution_select.append(course_type_option_masters_institution_input);
    course_type_institution_select.append(course_type_option_post_graduation_institution_input);
    course_type_institution_select.append(course_type_option_graduation_institution_input);
    course_type_institution_select.append(course_type_option_technician_institution_input);
    course_type_form_input_box.append(course_type_institution_select);
    form_input_box_internal.append(course_type_form_input_box);

    // ------- course-description -------

    // form-input-box div - div
    let course_description_form_input_box = document.createElement('div');
    course_description_form_input_box.classList.add('form-input-box');

    // label
    let course_description_label = document.createElement('label');
    course_description_label.setAttribute('for', 'course-description-' + (formations_quantity + 1));
    course_description_label.innerText = 'Descrição do Curso';

    // input
    let course_description_input = document.createElement('input');
    course_description_input.setAttribute('type', 'text');
    course_description_input.setAttribute('name', 'course-description-' + (formations_quantity + 1));
    course_description_input.setAttribute('id', 'course-description-' + (formations_quantity + 1));

    // Set parenting
    course_description_form_input_box.append(course_description_label);
    course_description_form_input_box.append(course_description_input);
    form_input_box_internal.append(course_description_form_input_box);

    // ------- course-start-date -------

    // form-input-box div - start date - div
    let course_start_date_form_input_box = document.createElement('div');
    course_start_date_form_input_box.classList.add('form-input-box');

    // label
    let course_start_date_label = document.createElement('label');
    course_start_date_label.setAttribute('for', 'course-start-date-' + (formations_quantity + 1));
    course_start_date_label.innerText = 'Data de Início do Curso';

    // input
    let course_start_date_input = document.createElement('input');
    course_start_date_input.setAttribute('type', 'date');
    course_start_date_input.setAttribute('name', 'course-start-date-' + (formations_quantity + 1));
    course_start_date_input.setAttribute('id', 'course-start-date-' + (formations_quantity + 1));

    // Set parenting
    course_start_date_form_input_box.append(course_start_date_label);
    course_start_date_form_input_box.append(course_start_date_input);
    form_input_box_internal.append(course_start_date_form_input_box);

    // ------- course-finish-date -------

    // form-input-box div - finish date - div
    let course_finish_date_form_input_box = document.createElement('div');
    course_finish_date_form_input_box.classList.add('form-input-box');

    // label
    let course_finish_date_label = document.createElement('label');
    course_finish_date_label.setAttribute('for', 'course-finish-date-' + (formations_quantity + 1));
    course_finish_date_label.innerText = 'Data de Finalização do Curso';

    // input
    let course_finish_date_input = document.createElement('input');
    course_finish_date_input.setAttribute('type', 'date');
    course_finish_date_input.setAttribute('name', 'course-finish-date-' + (formations_quantity + 1));
    course_finish_date_input.setAttribute('id', 'course-finish-date-' + (formations_quantity + 1));

    // Set parenting
    course_finish_date_form_input_box.append(course_finish_date_label);
    course_finish_date_form_input_box.append(course_finish_date_input);
    form_input_box_internal.append(course_finish_date_form_input_box);

    formations_quantity += 1;
}
