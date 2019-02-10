1.фильтры разделены,по дням работает, фильтр по дням попадает в селект, но при выборе в селекте не фильтрует сомпонент статтей:
//return !selected || !selected.length || selected.includes(article.id);

    return !from || !to || (published > from && published < to);
    
    
2. Если так, то не работает мультиселект, выбирает только 1 статью и ее отображает:
    return !selected || !selected.length || selected.includes(article.id);

    //return !from || !to || (published > from && published < to);


3. Усли так: то не срабатывает мульти селект и выбирает только 1 статью, которую и отображает , но стейт из дат попадает в селект:
(!selected || !selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
    
    
