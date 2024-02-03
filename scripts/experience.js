let experiences_quantity = 0;

function addExperience() {
    // ------------------ Capturing elements ------------------

    // experience-container div
    let experience_container = document.getElementById('experience-container');

    // ------------------ Creating elements ------------------

    // form-input-box div
    let form_input_box_internal = document.createElement('div');
    form_input_box_internal.classList.add('form-input-box-internal');

    let experience_title = document.createElement('p');
    experience_title.classList.add('group-title');
    experience_title.innerText = 'Experiência ' + (experiences_quantity + 1);

    // Set parenting
    form_input_box_internal.append(experience_title);
    experience_container.append(form_input_box_internal);

    // ------- experience-company -------

    // form-input-box div - div
    let experience_company_form_input_box = document.createElement('div');
    experience_company_form_input_box.classList.add('form-input-box');

    // label
    let experience_company_label = document.createElement('label');
    experience_company_label.setAttribute('for', 'experience-company-' + (experiences_quantity + 1));
    experience_company_label.innerText = 'Empresa';

    // input
    let experience_company_input = document.createElement('input');
    experience_company_input.setAttribute('type', 'text');
    experience_company_input.setAttribute('name', 'experience-company-' + (experiences_quantity + 1));
    experience_company_input.setAttribute('id', 'experience-company-' + (experiences_quantity + 1));

    // Set parenting
    experience_company_form_input_box.append(experience_company_label);
    experience_company_form_input_box.append(experience_company_input);
    form_input_box_internal.append(experience_company_form_input_box);

    // ------- experience-position -------

    // form-input-box div - div
    let experience_position_form_input_box = document.createElement('div');
    experience_position_form_input_box.classList.add('form-input-box');

    // label
    let experience_position_label = document.createElement('label');
    experience_position_label.setAttribute('for', 'experience-position-' + (experiences_quantity + 1));
    experience_position_label.innerText = 'Cargo';

    // input
    let experience_position_input = document.createElement('input');
    experience_position_input.setAttribute('type', 'text');
    experience_position_input.setAttribute('name', 'experience-position-' + (experiences_quantity + 1));
    experience_position_input.setAttribute('id', 'experience-position-' + (experiences_quantity + 1));

    // Set parenting
    experience_position_form_input_box.append(experience_position_label);
    experience_position_form_input_box.append(experience_position_input);
    form_input_box_internal.append(experience_position_form_input_box);

    // ------- experience-start-date -------

    // form-input-box div - start date - div
    let experience_start_date_form_input_box = document.createElement('div');
    experience_start_date_form_input_box.classList.add('form-input-box');

    // label
    let experience_start_date_label = document.createElement('label');
    experience_start_date_label.setAttribute('for', 'experience-start-date-' + (experiences_quantity + 1));
    experience_start_date_label.innerText = 'Data de Início';

    // input
    let experience_start_date_input = document.createElement('input');
    experience_start_date_input.setAttribute('type', 'date');
    experience_start_date_input.setAttribute('name', 'experience-start-date-' + (experiences_quantity + 1));
    experience_start_date_input.setAttribute('id', 'experience-start-date-' + (experiences_quantity + 1));

    // Set parenting
    experience_start_date_form_input_box.append(experience_start_date_label);
    experience_start_date_form_input_box.append(experience_start_date_input);
    form_input_box_internal.append(experience_start_date_form_input_box);

    // ------- experience-finish-date -------

    // form-input-box div - finish date - div
    let experience_finish_date_form_input_box = document.createElement('div');
    experience_finish_date_form_input_box.classList.add('form-input-box');

    // label
    let experience_finish_date_label = document.createElement('label');
    experience_finish_date_label.setAttribute('for', 'experience-finish-date-' + (experiences_quantity + 1));
    experience_finish_date_label.innerText = 'Data de Finalização';

    // input
    let experience_finish_date_input = document.createElement('input');
    experience_finish_date_input.setAttribute('type', 'date');
    experience_finish_date_input.setAttribute('name', 'experience-finish-date-' + (experiences_quantity + 1));
    experience_finish_date_input.setAttribute('id', 'experience-finish-date-' + (experiences_quantity + 1));

    // Set parenting
    experience_finish_date_form_input_box.append(experience_finish_date_label);
    experience_finish_date_form_input_box.append(experience_finish_date_input);
    form_input_box_internal.append(experience_finish_date_form_input_box);

    experiences_quantity += 1;
}
