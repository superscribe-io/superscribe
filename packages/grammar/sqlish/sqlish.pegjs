{
  var SQL = {
    listToString: function(x, xs) {
      return [x].concat(xs).join("");
    }
  };
}

Start
  = Select


Select
  = _ SelectToken
    _ x:SelectField xs:SelectFieldRest*
    _ FromToken
    _ from:Identifier
    _ where:Where? 
    _ sort:Order?
    _ limit:Limit?
    _ offset:Offset? {
    return {
      fields: [x].concat(xs),
      from,
      where,
      sort,
      limit,
      offset
    };
  }

SelectField "select valid field"
  = Identifier
  / "*"

SelectFieldRest
  = _ SeparatorToken _ s:SelectField {
    return s;
  }

Where "where expression"
  = WhereToken x:OrGroup { return x}
  
AndGroup
 = x:Filter y:AndSubGroup { 
   let and = [x];
   if(y?.length)
     and = and.concat(y[0]);
   return and;
 }
 
AndSubGroup
 = (AndToken y:AndGroup {return y})* 
 
OrGroup
 = and:AndGroup or:OrSubGroup  {
   if(or.length) {
   		if(and.length == 1)
        	or.push(and[0])
        else
   			or.push({and});
        return {or};
   }
   return {and};
 }

OrSubGroup
 = (OrToken and:AndGroup {
 	if(and?.length == 1)
    	return and[0]
 	return {and}
        
 })*
  
Filter
 = _ field:Identifier _ op:Operator _ value:Literal _ {
    return { [field]: {[op]: value} };
  }
 / "(" _ or:OrGroup _ ")" _ {return or}

Order
 = _ OrderByToken field:OrderByField|1.., _ "," _| {return field}
 
OrderByField
 = field:Identifier _ direction:("asc"i / "desc"i)? _ {
  let ret = [field];
  if(direction)
  	ret.push(direction)
  return ret;
 }

Limit
 = _ LimitToken limit:Integer _ {return limit} 

Offset
 = _ OffsetToken offset:Integer _ {return offset}


Operator
  = "<>"       { return "ne"; }
  / "!="       { return "ne"; }
  / "="        { return "eq"; }
  / "in"        { return "in"; }
  / "not in"        { return "nin"; }
  / "like"        { return "like"; }
  / "fts"       { return "fts"; }


/* Expressions */

Literal
  = Float
  / Integer
  / String
  / Array

Value
 = Float
 / Integer
 / String

ValueList
 = Value|.., _ "," _|

Integer "integer"
  = n:[0-9]+ {
    return parseInt(n.join(""));
  }

Float "float"
  = left:Integer "." right:Integer {
    return parseFloat([
      left.toString(),
      right.toString()
    ].join("."));
  }

String "string"
  = "'" str:ValidStringChar* "'" {
    return str.join("");
  }

Array 
 = "[" @ValueList "]"

ValidStringChar
  = !"'" c:. {
    return c;
  }

/* Tokens */

SelectToken
  = "SELECT"i !IdentRest

SeparatorToken
  = ","

FromToken
  = _ "FROM"i _

WhereToken
  = _ "WHERE"i _

OrToken
  = _ "OR"i _ 

AndToken
  = _ "AND"i _ 

OrderByToken
 = _ "order by"i _

AscendingToken
 = _ "asc"i _

DescendingToken
 = _ "desc"i _

LimitToken
 = _ "limit"i _

OffsetToken
 = _ "offset" _

/* Identifier */

Identifier "identifier"
  = x:IdentStart xs:IdentRest* {
    return SQL.listToString(x, xs);
  }

IdentStart
  = [a-z_]i

IdentRest
  = [a-z0-9_.]i

/* Skip */
_
  = ( WhiteSpace / NewLine )*

NewLine "newline"
  = "\r\n"
  / "\r"
  / "\n"
  / "\u2028"
  / "\u2029"

WhiteSpace "whitespace"
  = " "
  / "\t"
  / "\v"
  / "\f"